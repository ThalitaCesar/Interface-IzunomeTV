import styled from "styled-components";

export const Video = styled.div`
max-width:820px;
.flex{
    display:flex;
    justify-content:space-between;
    margin-top:16px;
    .title-video{
        color: var(--strong-gray);
    };
    .icons{
        display:flex;
        align-items:center;
        .icon{
            margin-left:10px;
            width:35px;
            height:35px;
            padding:5px;
            cursor:pointer;
            align-items:center;
            background: var(--medium-gray);
            border-radius: 20px;
            color: var(--blue);
            &:hover{
                filter: brightness(0.9)
                }
        }
    }
}
`


