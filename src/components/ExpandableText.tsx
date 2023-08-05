import { Text, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import EntitiyColor from '../utils/entitiyColor';

interface ExpandableTextProps {
  text: string;
}

const ExpandableText = ({ text = '' }: ExpandableTextProps) => {
  const { color } = EntitiyColor();

  const limit = 300;
  const isExpandableText = text.length > limit;
  const summary = isExpandableText ? `${text.slice(0, limit - 100)}...` : text;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex direction={'column'} gap={3}>
      <Text> {isExpanded ? text : summary}</Text>

      {isExpandableText && (
        <Button
          width={'fit-content '}
          background={color}
          color={'black'}
          fontSize={'1.5rem'}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </Flex>
  );
};

export default ExpandableText;

// Once state hook changes, component is re-rendered.
