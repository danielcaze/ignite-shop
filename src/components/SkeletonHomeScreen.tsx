import { ComponentProps } from 'react'
import { SkeletonHomeScreenContainer, SkeletonHomeScreenContent, SkeletonHomeScreenItem } from '../styles/components/SkeletonHomeScreen'

type SkeletonHomeScreenProps = ComponentProps<typeof SkeletonHomeScreenContainer> & {
  size: number
}

export default function SkeletonHomeScreen({ size, ...rest }: SkeletonHomeScreenProps) {
  const arraySize = new Array(size).fill(0).map((item, index) => item + index)
  return (
    <SkeletonHomeScreenContainer>
      {
        arraySize.map(skeleton => (
          <SkeletonHomeScreenContent key={skeleton} {...rest}>
            <SkeletonHomeScreenItem />
            <div>
              <SkeletonHomeScreenItem />
              <SkeletonHomeScreenItem />
            </div>
          </SkeletonHomeScreenContent>
        ))
      }
    </SkeletonHomeScreenContainer>
  )
}
