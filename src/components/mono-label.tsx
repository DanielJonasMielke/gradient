import { Text, View } from 'react-native';

type Props = {
  /** The accent-coloured prefix — "01", "M1", "∇". */
  index?: string;
  children: string;
  className?: string;
};

/**
 * The app's signature metadata line: an accent index, an uppercase monospace
 * label, and a hairline running to the right edge.
 */
export function MonoLabel({ index, children, className = '' }: Props) {
  return (
    <View className={`w-full flex-row items-center gap-2 ${className}`}>
      {index ? (
        <Text className="font-mono text-[10px] text-accent" style={{ letterSpacing: 1.4 }}>
          {index}
        </Text>
      ) : null}
      <Text
        className="font-mono text-[10px] uppercase text-textMuted"
        style={{ letterSpacing: 1.4 }}
      >
        {children}
      </Text>
      <View className="h-px flex-1 bg-hairline" />
    </View>
  );
}
