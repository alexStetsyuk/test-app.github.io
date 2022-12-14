import StyledCheckboxComponent from './StyledCheckboxComponent'
import { StyledP } from '../shared/StyledP'
import { ContentWrapper } from '../shared/ContentWrapper'
import { useState } from 'react'

export default function FeedbackCheckbox({ title }) {
  const [checked, setChecked] = useState(false)

  function checkedHandler() {
    setChecked((prevState) => !prevState)
  }
  return (
    <ContentWrapper
      onClick={checkedHandler}
      alignItems='center'
      gap='7px'
      padding='5px'
      margin='0 0 0 1.3rem'
      cursor='pointer'
    >
      <StyledCheckboxComponent checked={checked} />
      <StyledP>{title}</StyledP>
    </ContentWrapper>
  )
}
