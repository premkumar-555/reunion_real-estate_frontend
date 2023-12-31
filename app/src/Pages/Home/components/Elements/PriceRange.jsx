import React from 'react'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip
} from '@chakra-ui/react'
const PriceRange = () => {
  const [sliderMinValue, setsliderMinValue] = React.useState(0)
  const [sliderMaxValue, setsliderMaxValue] = React.useState(50)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <RangeSlider onChange={(v) => {setsliderMinValue(v[0]); setsliderMaxValue(v[1])}} aria-label={['min', 'max']} defaultValue={[0, 1000]}
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}>
  <RangeSliderTrack bg='lightgrey'>
    <RangeSliderFilledTrack />
  </RangeSliderTrack>
  <Tooltip isRound={true}
        hasArrow
        bg='blue.500'
        color='white'
        placement='bottom'
        isOpen={showTooltip}
        label={`${sliderMinValue}K`}
        fontSize={['12px', '14px', '16px']}
      >
  <RangeSliderThumb index={0} />
      </Tooltip>
  <Tooltip
        hasArrow
        bg='blue.500'
        color='white'
        placement='bottom'
        isOpen={showTooltip}
        label={`${sliderMaxValue}K`}
        fontSize={['12px', '14px', '16px']}
      >
  <RangeSliderThumb index={1} />
      </Tooltip>
</RangeSlider>
  )
}

export default PriceRange