import styled from 'styled-components'
import { CloseBtn } from '../shared/CloseBtn'
import Step from './Step'
import { Link, useHref } from 'react-router-dom'

const Layout = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 20px;
`

const HeaderWrapper = styled.div`
  margin: 2rem 0 2rem -13rem;
`

export default function Header() {
  const href = useHref()
  const activeStage = href.slice(1)

  return (
    <HeaderWrapper>
      <h1>Create Stage</h1>
      <Layout>
        <Link to='/firstStage' className='link'>
          <Step
            numberOfStep={1}
            headerContent='Basic Configuration'
            active={true}
          />
        </Link>
        <Link to='/secondStage' className='link'>
          <Step
            numberOfStep={2}
            headerContent='Team / Votes'
            active={
              activeStage === 'secondStage' || activeStage === 'thirdStage'
            }
          />
        </Link>
        <Link to='/thirdStage' className='link'>
          <Step
            numberOfStep={3}
            headerContent='Feedback'
            active={activeStage === 'thirdStage'}
          />
        </Link>
      </Layout>
      <CloseBtn>
        <svg
          width='31'
          height='9'
          viewBox='0 0 31 9'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3.39 8.1C2.77667 8.1 2.26667 7.98667 1.86 7.76C1.46 7.53333 1.15667 7.21667 0.95 6.81C0.743333 6.40333 0.63 5.93 0.61 5.39C0.603333 5.11667 0.6 4.82333 0.6 4.51C0.6 4.19667 0.603333 3.89667 0.61 3.61C0.63 3.07 0.743333 2.59667 0.95 2.19C1.15667 1.78333 1.46 1.46667 1.86 1.24C2.26667 1.01333 2.77667 0.9 3.39 0.9C3.85 0.9 4.25333 0.963333 4.6 1.09C4.94667 1.21667 5.23333 1.38667 5.46 1.6C5.69333 1.81333 5.87 2.05333 5.99 2.32C6.11 2.58 6.17667 2.85 6.19 3.13C6.19667 3.19 6.17667 3.24 6.13 3.28C6.09 3.32 6.04 3.34 5.98 3.34H5.43C5.37 3.34 5.31667 3.32333 5.27 3.29C5.23 3.25667 5.2 3.19667 5.18 3.11C5.06667 2.59 4.85333 2.23333 4.54 2.04C4.23333 1.84667 3.84667 1.75 3.38 1.75C2.84667 1.75 2.42333 1.90333 2.11 2.21C1.79667 2.51 1.62667 2.99333 1.6 3.66C1.58 4.20667 1.58 4.76667 1.6 5.34C1.62667 6.00667 1.79667 6.49333 2.11 6.8C2.42333 7.1 2.84667 7.25 3.38 7.25C3.84667 7.25 4.23333 7.15333 4.54 6.96C4.85333 6.76667 5.06667 6.41 5.18 5.89C5.2 5.80333 5.23 5.74333 5.27 5.71C5.31667 5.67667 5.37 5.66 5.43 5.66H5.98C6.04 5.66 6.09 5.68 6.13 5.72C6.17667 5.76 6.19667 5.81 6.19 5.87C6.17667 6.15 6.11 6.42333 5.99 6.69C5.87 6.95 5.69333 7.18667 5.46 7.4C5.23333 7.61333 4.94667 7.78333 4.6 7.91C4.25333 8.03667 3.85 8.1 3.39 8.1ZM7.76016 8C7.68682 8 7.63016 7.98 7.59016 7.94C7.55016 7.89333 7.53016 7.83667 7.53016 7.77V1.23C7.53016 1.16333 7.55016 1.11 7.59016 1.07C7.63016 1.02333 7.68682 1 7.76016 1H8.29016C8.35682 1 8.41016 1.02333 8.45016 1.07C8.49016 1.11 8.51016 1.16333 8.51016 1.23V7.13H11.8402C11.9135 7.13 11.9702 7.15333 12.0102 7.2C12.0502 7.24 12.0702 7.29667 12.0702 7.37V7.77C12.0702 7.83667 12.0502 7.89333 12.0102 7.94C11.9702 7.98 11.9135 8 11.8402 8H7.76016ZM15.5773 8.1C15.0106 8.1 14.5239 8.00333 14.1173 7.81C13.7106 7.61 13.3973 7.30667 13.1773 6.9C12.9573 6.48667 12.8339 5.97 12.8073 5.35C12.8006 5.05667 12.7973 4.77667 12.7973 4.51C12.7973 4.23667 12.8006 3.95333 12.8073 3.66C12.8339 3.04667 12.9606 2.53667 13.1873 2.13C13.4206 1.71667 13.7406 1.41 14.1473 1.21C14.5606 1.00333 15.0373 0.9 15.5773 0.9C16.1239 0.9 16.6006 1.00333 17.0073 1.21C17.4206 1.41 17.7439 1.71667 17.9773 2.13C18.2106 2.53667 18.3373 3.04667 18.3573 3.66C18.3706 3.95333 18.3773 4.23667 18.3773 4.51C18.3773 4.77667 18.3706 5.05667 18.3573 5.35C18.3373 5.97 18.2139 6.48667 17.9873 6.9C17.7673 7.30667 17.4539 7.61 17.0473 7.81C16.6406 8.00333 16.1506 8.1 15.5773 8.1ZM15.5773 7.25C16.0906 7.25 16.5073 7.09667 16.8273 6.79C17.1539 6.48333 17.3306 5.98667 17.3573 5.3C17.3706 5 17.3773 4.73333 17.3773 4.5C17.3773 4.26 17.3706 3.99333 17.3573 3.7C17.3439 3.24 17.2573 2.86667 17.0973 2.58C16.9439 2.29333 16.7373 2.08333 16.4773 1.95C16.2173 1.81667 15.9173 1.75 15.5773 1.75C15.2506 1.75 14.9573 1.81667 14.6973 1.95C14.4373 2.08333 14.2273 2.29333 14.0673 2.58C13.9139 2.86667 13.8273 3.24 13.8073 3.7C13.8006 3.99333 13.7973 4.26 13.7973 4.5C13.7973 4.73333 13.8006 5 13.8073 5.3C13.8339 5.98667 14.0106 6.48333 14.3373 6.79C14.6639 7.09667 15.0773 7.25 15.5773 7.25ZM22.0848 8.1C21.5048 8.1 21.0182 8.01333 20.6248 7.84C20.2315 7.66 19.9282 7.43 19.7148 7.15C19.5082 6.86333 19.3982 6.56 19.3848 6.24C19.3848 6.18667 19.4048 6.14 19.4448 6.1C19.4915 6.05333 19.5448 6.03 19.6048 6.03H20.1148C20.1948 6.03 20.2548 6.05 20.2948 6.09C20.3348 6.13 20.3615 6.17667 20.3748 6.23C20.4082 6.39 20.4882 6.55 20.6148 6.71C20.7482 6.86333 20.9315 6.99333 21.1648 7.1C21.4048 7.2 21.7115 7.25 22.0848 7.25C22.6582 7.25 23.0782 7.15 23.3448 6.95C23.6182 6.74333 23.7548 6.47 23.7548 6.13C23.7548 5.89667 23.6815 5.71 23.5348 5.57C23.3948 5.42333 23.1782 5.29333 22.8848 5.18C22.5915 5.06667 22.2115 4.94333 21.7448 4.81C21.2582 4.67 20.8548 4.51667 20.5348 4.35C20.2148 4.18333 19.9748 3.97667 19.8148 3.73C19.6615 3.48333 19.5848 3.17 19.5848 2.79C19.5848 2.43 19.6815 2.11 19.8748 1.83C20.0682 1.54333 20.3448 1.31667 20.7048 1.15C21.0715 0.983333 21.5148 0.9 22.0348 0.9C22.4482 0.9 22.8082 0.956666 23.1148 1.07C23.4282 1.17667 23.6882 1.32333 23.8948 1.51C24.1015 1.69 24.2582 1.88667 24.3648 2.1C24.4715 2.30667 24.5282 2.51 24.5348 2.71C24.5348 2.75667 24.5182 2.80333 24.4848 2.85C24.4515 2.89 24.3982 2.91 24.3248 2.91H23.7948C23.7482 2.91 23.6982 2.89667 23.6448 2.87C23.5982 2.84333 23.5615 2.79333 23.5348 2.72C23.4948 2.44667 23.3415 2.21667 23.0748 2.03C22.8082 1.84333 22.4615 1.75 22.0348 1.75C21.6015 1.75 21.2482 1.83333 20.9748 2C20.7082 2.16667 20.5748 2.42667 20.5748 2.78C20.5748 3.00667 20.6382 3.19667 20.7648 3.35C20.8915 3.49667 21.0915 3.62667 21.3648 3.74C21.6382 3.85333 21.9948 3.97333 22.4348 4.1C22.9682 4.24667 23.4048 4.40333 23.7448 4.57C24.0848 4.73 24.3348 4.93333 24.4948 5.18C24.6615 5.42 24.7448 5.73 24.7448 6.11C24.7448 6.53 24.6348 6.89 24.4148 7.19C24.1948 7.48333 23.8848 7.71 23.4848 7.87C23.0915 8.02333 22.6248 8.1 22.0848 8.1ZM26.2855 8C26.2122 8 26.1555 7.98 26.1155 7.94C26.0755 7.89333 26.0555 7.83667 26.0555 7.77V1.24C26.0555 1.16667 26.0755 1.11 26.1155 1.07C26.1555 1.02333 26.2122 1 26.2855 1H30.4155C30.4889 1 30.5455 1.02333 30.5855 1.07C30.6255 1.11 30.6455 1.16667 30.6455 1.24V1.62C30.6455 1.69333 30.6255 1.75 30.5855 1.79C30.5455 1.83 30.4889 1.85 30.4155 1.85H27.0155V4.04H30.1955C30.2689 4.04 30.3255 4.06333 30.3655 4.11C30.4055 4.15 30.4255 4.20667 30.4255 4.28V4.65C30.4255 4.71667 30.4055 4.77333 30.3655 4.82C30.3255 4.86 30.2689 4.88 30.1955 4.88H27.0155V7.15H30.4955C30.5689 7.15 30.6255 7.17 30.6655 7.21C30.7055 7.25 30.7255 7.30667 30.7255 7.38V7.77C30.7255 7.83667 30.7055 7.89333 30.6655 7.94C30.6255 7.98 30.5689 8 30.4955 8H26.2855Z'
            fill='#AAB4BD'
          />
        </svg>
      </CloseBtn>
    </HeaderWrapper>
  )
}
