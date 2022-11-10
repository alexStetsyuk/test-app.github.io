import { useState } from 'react'
import Button from './Button'
import TeamInputField from './TeamInputField'
import TeamMember from './TeamMember'
import AddMemberBtn from './AddMemberBtn'
import RadioBtn from './RadioBtn'
import MemberVote from './MemberVote'
import { HrLine } from '../shared/HrLine'
import { HeaderThree } from '../shared/HeaderThree'
import { StyledSelect } from '../shared/StyledSelect'
import { ContentWrapper } from '../shared/ContentWrapper'
import Input from './Input'
import Operations from './Operations'

export default function SecondStage() {
  const [count, setCount] = useState(1)
  const [members, setMembers] = useState([
    { id: crypto.randomUUID(), name: 'Kathryn Murphy' },
    { id: crypto.randomUUID(), name: 'Darrell Steward' },
    { id: crypto.randomUUID(), name: 'Darlene Robertson' }
  ])
  const [newMember, setNewMember] = useState('')
  const [inputField, setInputField] = useState(false)

  function addHandler() {
    setCount((prevValue) => prevValue + 1)
  }

  function subtractHandler() {
    setCount((prevValue) => {
      if (prevValue !== 0) {
        return prevValue - 1
      }
      return 0
    })
  }

  function deleteMember(id) {
    setMembers((currentMembers) =>
      currentMembers.filter((member) => member.id !== id)
    )
  }

  function handleAddMember() {
    setMembers((prevMembers) => {
      return [...prevMembers, { id: crypto.randomUUID(), name: newMember }]
    })
    setNewMember('')
    setInputField(false)
  }

  function handleChange(e) {
    setNewMember(e.target.value)
  }

  function inputActiveHandler() {
    setInputField(true)
  }

  return (
    <ContentWrapper display='flex' flexDirection='column'>
      <ContentWrapper
        display='flex'
        width='900px'
        flexDirection='column'
        alignItems='center'
        gap='1rem'
        backgroundColor='#f6f8fd'
      >
        <HeaderThree marginTop='2rem'>Team</HeaderThree>
        <ContentWrapper display='flex' gap='10px'>
          <StyledSelect width='250px'>
            <option value='Design'>Design</option>
          </StyledSelect>
          <Operations
            add={addHandler}
            subtract={subtractHandler}
            count={count}
          />
          <StyledSelect width='269px'>
            <option value='' disabled selected style={{ color: '#AAB4BD' }}>
              Who to send the request to
            </option>
            <option value='Design'>Design</option>
          </StyledSelect>
        </ContentWrapper>
        <ContentWrapper display='flex' gap='10px'>
          <StyledSelect width='250px' alignSelf='flex-start'>
            <option value='Specific'>Specific</option>
          </StyledSelect>
          <TeamInputField>
            {!members.length && !inputField && (
              <ContentWrapper alignItems='center' color='#AAB4BD'>
                Add someone here
              </ContentWrapper>
            )}
            {members.map((member) => {
              return (
                <TeamMember
                  key={member.id}
                  id={member.id}
                  name={member.name}
                  deleteMember={deleteMember}
                />
              )
            })}
            {inputField && (
              <Input
                value={newMember}
                handleAdd={handleAddMember}
                changeHandler={handleChange}
                blurHandler={() => setInputField(false)}
              />
            )}
            <AddMemberBtn clickHandler={inputActiveHandler} />
          </TeamInputField>
        </ContentWrapper>
        <ContentWrapper display='flex' gap='21.5rem'>
          <Button
            disabled={true}
            fileBtn={false}
            buttonLabel='Add'
            alignSelf='flex-end'
          />
          <Button
            disabled={true}
            fileBtn={false}
            contentColor='#FFF'
            backgroundColor='#4EC970'
            buttonLabel='Send Request'
            mgTop='15px'
            boxShadow={true}
          />
        </ContentWrapper>
        <HrLine />
        <ContentWrapper
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <HeaderThree marginTop='1rem'>Votes</HeaderThree>
          <ContentWrapper
            width='615px'
            alignItems='center'
            justifyContent='space-around'
            margin='1.5rem 0 0 0'
          >
            <RadioBtn title='All votes' />
            <RadioBtn title='Majority' />
            <RadioBtn title='Veto' />
          </ContentWrapper>
          <ContentWrapper
            display='flex'
            flexDirection='column'
            margin='2rem'
            gap='5px'
          >
            <MemberVote name='Kathryn Murphy' />
            <MemberVote name='Darrell Steward' />
            <MemberVote name='Darlene Robertson' />
          </ContentWrapper>
        </ContentWrapper>
      </ContentWrapper>
      {/* <Button
        fileBtn={false}
        contentColor='#FFF'
        backgroundColor='#4EC970'
        buttonLabel='Next'
        alignSelf='flex-end'
        mgTop='15px'
        moveTo='thirdStage'
        boxShadow={true}
      /> */}
    </ContentWrapper>
  )
}
