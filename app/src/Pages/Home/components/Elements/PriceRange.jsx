import React from 'react'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
const PriceRange = () => {
  return (
    <RangeSlider onChange={(e) => {console.log(e)}} aria-label={['min', 'max']} defaultValue={[0, 1000]}>
  <RangeSliderTrack bg='lightgrey'>
    <RangeSliderFilledTrack />
  </RangeSliderTrack>
  <RangeSliderThumb index={0} />
  <RangeSliderThumb index={1} />
</RangeSlider>
  )
}

export default PriceRange