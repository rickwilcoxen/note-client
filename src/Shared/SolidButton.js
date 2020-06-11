import styled from 'styled-components'

const SolidButton = styled.button`
border-radius: 20px;
border-width: 2px;
background-color: ${props => props.primaryColor};
font-size: 1.2rem;
padding: 6px 25px;
margin: 8px;
transition: color .2s linear, background-color .2s linear;
&:hover {
  background-color: gray;
  color: ${props => props.primaryColor};
}
`

export default SolidButton
