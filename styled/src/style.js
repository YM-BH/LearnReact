import styled from 'styled-components'

export const HomeWrapper = styled.div.attrs({
  color: 'orange'
})`
  font-size: 40px;

  .title {
    color: red;
  }

  .content {
    font-size: 20px;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
  }

  .title:hover {
    color: orange
  }

  ul {
    font-size: 30px;

    li::after {
      content: 'aaa';
    }

    .active {
      background: purple;
    }

  }
`