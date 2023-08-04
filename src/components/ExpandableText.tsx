import { Text, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
}

const ExpandableText = ({ text = '' }: ExpandableTextProps) => {
  const limit = 300;
  const isExpandableText = text.length > limit;
  const summary = isExpandableText ? `${text.slice(0, limit - 100)}...` : text;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex direction={'column'} gap={'2rem '}>
      <Text> {isExpanded ? text : summary}</Text>

      {isExpandableText && (
        <Button
          width={'fit-content '}
          colorScheme="yellow"
          fontSize={'1.5rem'}
          fontWeight={'bold'}
          padding={'1em 0.5em'}
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
