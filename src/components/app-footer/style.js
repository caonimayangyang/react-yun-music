import styled from 'styled-components'
import sprite_footer_02 from '@/assets/img/sprite_footer_02.png'
import sprite_footer_01 from '@/assets/img/sprite_footer_01.png'
export const WrapperFooter = styled.div `
    width: 100%;
    border-top: 1px solid #d3d3d3;
    background-color: #f2f2f2;
    height: 172px;
    .footer-content {
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
`
export const FooterLeft = styled.div `
    padding-top: 15px;
    line-height: 24px;
    flex: 1;
    .link {
        a {
        color: #999;
        }
    .line {
      margin: 0 10px;
      color: #999;
    }
  }
  .copyright {
    span {
      margin-right: 15px;
    }
  }
  .info {
      a {
          margin-right: 10px;
      }
      img {
        width: 14px;
      }
  }
`
export const FooterRight = styled.ul `
    width: 420px;
    margin-top: 33px;
    display: flex;
    .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${sprite_footer_02});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(2) .link {
      background-position: -60px -50px;
    }
    :nth-child(2) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 60px;
      height: 10px;
      background-image: url(${sprite_footer_01});
      background-size: 180px 100px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`