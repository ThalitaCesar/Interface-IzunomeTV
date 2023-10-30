import styled from "styled-components";

export const Video = styled.div`
max-width:63vw;
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
            max-width:120px;
            font-size:14px;
            font-weight:300px;
            height:35px;
            padding:5px;
            cursor:pointer;
            align-items:center;
            background: var(--medium-gray);
            border-radius: 6px;
            color: var(--blue);
            display:flex;
            align-item:center;
            justify-content:center;
            &:hover{
                filter: brightness(0.9)
                }
        }
    }
}
`


