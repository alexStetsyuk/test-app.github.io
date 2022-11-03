import { ContentWrapper } from '../shared/ContentWrapper'

export default function Star({ count }) {
  const defaultStar = (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.14374 4.62758C8.93034 2.66658 9.32364 1.68608 9.99997 1.68608C10.6763 1.68608 11.0696 2.66658 11.8562 4.62758L11.8928 4.7189C12.3372 5.82676 12.5594 6.3807 13.0123 6.71739C13.4651 7.05407 14.0596 7.10731 15.2485 7.21379L15.4634 7.23304C17.4092 7.4073 18.3822 7.49443 18.5903 8.11342C18.7985 8.7324 18.076 9.38974 16.6309 10.7044L16.1487 11.1432C15.4172 11.8087 15.0514 12.1415 14.8809 12.5776C14.8491 12.659 14.8227 12.7423 14.8018 12.8271C14.6897 13.2818 14.7968 13.7645 15.0111 14.73L15.0777 15.0305C15.4714 16.8048 15.6682 17.692 15.3246 18.0747C15.1961 18.2177 15.0292 18.3206 14.8438 18.3712C14.3476 18.5066 13.6431 17.9326 12.2342 16.7845C11.309 16.0306 10.8464 15.6537 10.3153 15.5689C10.1064 15.5355 9.89353 15.5355 9.68463 15.5689C9.15352 15.6537 8.69094 16.0306 7.76577 16.7845C6.35681 17.9326 5.65234 18.5066 5.15614 18.3712C4.97072 18.3206 4.80381 18.2177 4.67538 18.0747C4.33171 17.692 4.52854 16.8048 4.92222 15.0305L4.98889 14.73C5.2031 13.7645 5.31021 13.2818 5.19815 12.8271C5.17725 12.7423 5.15081 12.659 5.11901 12.5776C4.94854 12.1415 4.58279 11.8087 3.85128 11.1432L3.369 10.7044C1.92395 9.38974 1.20143 8.7324 1.40961 8.11342C1.61779 7.49443 2.5907 7.4073 4.53651 7.23304L4.75145 7.21379C5.94036 7.10731 6.53482 7.05407 6.98767 6.71739C7.44052 6.3807 7.66272 5.82676 8.10711 4.71889L8.14374 4.62758Z'
        stroke='#CCD2E3'
        strokeWidth='2'
      />
    </svg>
  )
  const filledStar = (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.30731 4.21986C7.94938 2.61918 8.27042 1.81883 8.792 1.70791C8.92914 1.67874 9.07089 1.67874 9.20803 1.70791C9.72961 1.81883 10.0506 2.61918 10.6927 4.21986C11.0579 5.13014 11.2404 5.58528 11.582 5.89485C11.6779 5.98168 11.7819 6.05901 11.8926 6.12576C12.2875 6.36374 12.7803 6.40788 13.7661 6.49617C15.4349 6.64562 16.2693 6.72034 16.5241 7.19609C16.5768 7.29462 16.6127 7.4013 16.6302 7.51169C16.7147 8.04472 16.1013 8.60278 14.8745 9.7189L14.5338 10.0288C13.9603 10.5506 13.6735 10.8115 13.5076 11.1372C13.4081 11.3325 13.3414 11.5428 13.3102 11.7598C13.2581 12.1215 13.342 12.5 13.51 13.2569L13.57 13.5274C13.8712 14.8849 14.0218 15.5637 13.8338 15.8973C13.6649 16.197 13.3539 16.3889 13.0103 16.4053C12.6278 16.4236 12.0888 15.9844 11.0108 15.106C10.3006 14.5273 9.94548 14.2379 9.55128 14.1249C9.19103 14.0216 8.809 14.0216 8.44875 14.1249C8.05454 14.2379 7.69944 14.5273 6.98923 15.106C5.91125 15.9844 5.37227 16.4236 4.98975 16.4053C4.64615 16.3889 4.3351 16.197 4.16623 15.8973C3.97824 15.5637 4.12884 14.8849 4.43004 13.5274L4.49004 13.2569C4.658 12.5 4.74197 12.1215 4.68986 11.7598C4.6586 11.5428 4.59188 11.3325 4.49238 11.1372C4.32651 10.8115 4.03974 10.5506 3.46619 10.0288L3.12552 9.7189C1.89873 8.60278 1.28534 8.04472 1.36981 7.51169C1.3873 7.4013 1.42318 7.29462 1.47595 7.19608C1.73075 6.72034 2.56514 6.64562 4.2339 6.49617C5.21968 6.40788 5.71257 6.36374 6.10741 6.12576C6.21816 6.05901 6.32217 5.98168 6.41799 5.89485C6.7596 5.58528 6.94217 5.13014 7.30731 4.21986Z'
        fill='#4EC970'
        stroke='#4EC970'
        stroke-width='2'
      />
    </svg>
  )

  const stars = []
  for (let i = count; i >= 0; i--) {
    stars.push(defaultStar)
  }
  const star = stars.map((item, index) => <div key={index}>{item}</div>)
  return <ContentWrapper gap='7px'>{star}</ContentWrapper>
}