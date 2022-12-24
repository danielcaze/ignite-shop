import { keyframes, styled } from "..";

const skeletonAnimation = keyframes({
  "0%": {
    backgroundPosition: "-200px 0",
  },
  "100%": {
    backgroundPosition: "calc(200px + 100%) 0",
  },
});

export const SkeletonHomeScreenContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656
})

export const SkeletonHomeScreenContent = styled('div', {
  display: 'grid',
  gridTemplateRows: '600px 32px',
  gap: 24,

  div: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 330px) minmax(0, 100px)',
    gap: '0.5rem',
    justifyContent: 'space-between',
  }
})

export const SkeletonHomeScreenItem = styled('div', {
  animation: `${skeletonAnimation} 1300ms ease-in-out infinite`,
  backgroundColor: "$gray800",
  backgroundImage: "linear-gradient(90deg, $gray800, $gray700, $gray800)",
  backgroundSize: "200px 100%",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
  borderRadius: 8,
})