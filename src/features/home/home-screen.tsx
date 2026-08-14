import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MonoLabel } from '@/components/mono-label';

/* Hard-coded for now. This all becomes lesson frontmatter later. */

type DayState = 'done' | 'frozen' | 'today' | 'idle';
const WEEK: { label: string; state: DayState }[] = [
  { label: 'M', state: 'done' },
  { label: 'T', state: 'done' },
  { label: 'W', state: 'frozen' },
  { label: 'T', state: 'done' },
  { label: 'F', state: 'done' },
  { label: 'S', state: 'done' },
  { label: 'S', state: 'today' },
];

type RowState = 'done' | 'next' | 'open' | 'locked';
const LESSONS: { icon: string; title: string; subtitle: string; state: RowState }[] = [
  {
    icon: 'ƒ',
    title: 'What a function actually is',
    subtitle: 'Mastered · 3 cards',
    state: 'done',
  },
  {
    icon: '∿',
    title: 'Building any curve out of straight lines',
    subtitle: 'Up next · 11 steps · 14 min',
    state: 'next',
  },
  { icon: '( )', title: 'Rearranging without fear', subtitle: 'Then this · 9 min', state: 'open' },
  { icon: '∇L', title: 'Gradient descent, downhill', subtitle: 'Locked', state: 'locked' },
];

function Day({ label, state }: { label: string; state: DayState }) {
  const box =
    state === 'done'
      ? 'bg-accentWashStrong border-transparent'
      : state === 'today'
        ? 'bg-surface border-accent'
        : 'bg-surface border-hairline';
  const text =
    state === 'done' ? 'text-accentMuted' : state === 'today' ? 'text-accent' : 'text-textMuted';
  const dot =
    state === 'done' || state === 'today'
      ? 'bg-accent'
      : state === 'frozen'
        ? 'bg-formulaB'
        : 'bg-textFaint';

  return (
    <View className={`h-[46px] flex-1 items-center justify-center gap-1 rounded-sm border ${box}`}>
      <Text className={`font-mono text-[9px] ${text}`} style={{ letterSpacing: 0.8 }}>
        {label}
      </Text>
      <View className={`h-[5px] w-[5px] rounded-full ${dot}`} />
    </View>
  );
}

function LessonRow({
  icon,
  title,
  subtitle,
  state,
}: {
  icon: string;
  title: string;
  subtitle: string;
  state: RowState;
}) {
  const iconBox =
    state === 'next'
      ? 'bg-accent border-transparent'
      : state === 'done'
        ? 'bg-accentWash border-transparent'
        : 'bg-surface border-hairline';
  const iconText =
    state === 'next' ? 'text-onAccent' : state === 'done' ? 'text-accent' : 'text-textSecondary';

  return (
    <Pressable
      className={`w-full flex-row items-center gap-3.5 border-b border-hairline py-4 ${
        state === 'locked' ? 'opacity-40' : ''
      }`}
    >
      <View className={`h-10 w-10 items-center justify-center rounded-[12px] border ${iconBox}`}>
        <Text className={`font-math text-[17px] italic ${iconText}`}>{icon}</Text>
      </View>

      <View className="min-w-0 flex-1">
        <Text className="text-[15px] font-medium text-textPrimary">{title}</Text>
        <Text
          className="mt-1 font-mono text-[9.5px] uppercase text-textMuted"
          style={{ letterSpacing: 1 }}
        >
          {subtitle}
        </Text>
      </View>

      <Text className={state === 'next' ? 'text-accent' : 'text-textFaint'}>
        {state === 'done' ? '↻' : state === 'locked' ? '' : '→'}
      </Text>
    </Pressable>
  );
}

export function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-screen" edges={['top']}>
      <ScrollView className="flex-1" contentContainerClassName="px-[22px] pb-8">
        {/* ── Brand ─────────────────────────────────────────────── */}
        <View className="mb-6 mt-3.5 flex-row items-start justify-between">
          <View className="flex-row items-center gap-2.5">
            <View className="h-[26px] w-[26px] items-center justify-center rounded-lg bg-accent">
              <Text className="text-[13px] font-semibold text-onAccent">∿</Text>
            </View>
            <View>
              <Text className="text-[19px] font-semibold text-textPrimary">Gradient</Text>
              <Text
                className="mt-0.5 font-mono text-[9px] uppercase text-textMuted"
                style={{ letterSpacing: 1.4 }}
              >
                math fluency for ml
              </Text>
            </View>
          </View>

          <View className="flex-row items-baseline gap-2">
            <Text className="text-[26px] font-semibold text-accent">6</Text>
            <Text
              className="font-mono text-[9.5px] uppercase text-textMuted"
              style={{ letterSpacing: 1.3 }}
            >
              days
            </Text>
          </View>
        </View>

        {/* ── Week strip ────────────────────────────────────────── */}
        <View className="mb-3 flex-row gap-1.5">
          {WEEK.map((d, i) => (
            <Day key={i} label={d.label} state={d.state} />
          ))}
        </View>
        <Text
          className="font-mono text-[9.5px] uppercase leading-[17px] text-textMuted"
          style={{ letterSpacing: 0.6 }}
        >
          Wed covered by streak freeze · 1 remaining
        </Text>

        <View className="my-6 h-px bg-hairline" />

        {/* ── Today ─────────────────────────────────────────────── */}
        <MonoLabel index="01">Today · 14 min</MonoLabel>
        <View className="mt-3.5 rounded-md bg-accentWash p-[18px]">
          <Text className="mb-2 text-[20px] font-semibold text-textPrimary">
            Building any curve out of straight lines
          </Text>
          <Text className="mb-[18px] text-[15px] leading-[24px] text-textSecondary">
            A neuron is a bent line. Stack enough bends and you can trace any shape at all — which
            is the whole reason neural networks work.
          </Text>
          <Pressable className="w-full flex-row items-center justify-center gap-2 rounded-md bg-accent px-[18px] py-4">
            <Text className="text-[15.5px] font-semibold text-onAccent">Start lesson</Text>
            <Text className="text-[15.5px] font-semibold text-onAccent">→</Text>
          </Pressable>
        </View>

        {/* ── Review ────────────────────────────────────────────── */}
        <MonoLabel index="02" className="mt-6">
          Due for review
        </MonoLabel>
        <View className="mt-3.5 flex-row items-center gap-4 rounded-md border border-hairline bg-surface p-[18px]">
          <View className="flex-1">
            <Text className="mb-1 text-[17px] font-semibold text-textPrimary">
              3 cards are ripe
            </Text>
            <Text className="text-[13px] leading-[20px] text-textSecondary">
              FSRS says you&apos;re about to forget these.
            </Text>
          </View>
          <Pressable className="rounded-md border border-hairline bg-surfaceRaised px-4 py-[11px]">
            <Text className="text-[13px] font-semibold text-textPrimary">Review</Text>
          </Pressable>
        </View>

        {/* ── Module ────────────────────────────────────────────── */}
        <View className="my-6 h-px bg-hairline" />
        <MonoLabel index="M1" className="mb-1.5">
          Foundations
        </MonoLabel>
        {LESSONS.map((l) => (
          <LessonRow key={l.title} {...l} />
        ))}

        <Text
          className="mt-6 font-mono text-[9.5px] uppercase leading-[17px] text-textMuted"
          style={{ letterSpacing: 0.6 }}
        >
          Nothing unlocks on time spent — only on demonstrated mastery
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
