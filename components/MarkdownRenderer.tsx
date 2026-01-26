
import React from 'react';

interface MarkdownRendererProps {
  text: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ text }) => {
  const renderLine = (line: string) => {
    // Bold: **text**
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic: *text*
    line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return line;
  };

  const lines = text.split('\n');
  const elements = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      if (!inList) {
        inList = true;
        elements.push(<ul key={`ul-${i}`} className="list-disc list-inside space-y-1 my-2"></ul>);
      }
      const listItem = <li key={i} dangerouslySetInnerHTML={{ __html: renderLine(line.trim().substring(2)) }} />;
      const lastElement = elements[elements.length - 1];
      if (lastElement && lastElement.type === 'ul') {
          const newProps = { ...lastElement.props, children: [...(lastElement.props.children || []), listItem] };
          elements[elements.length - 1] = React.cloneElement(lastElement, newProps);
      }
    } else {
      if (inList) {
        inList = false;
      }
      elements.push(<p key={i} className="py-1" dangerouslySetInnerHTML={{ __html: renderLine(line) }} />);
    }
  }

  return <>{elements}</>;
};

export default MarkdownRenderer;
