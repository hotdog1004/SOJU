import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-derection: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const ContenText = styled.p`
    font-size: 14px;
`;

export default function CommentListItem(props) {
    const {comment} = props;

    return (
        <Wrapper>
            <ContenText>{comment.content}</ContenText>
        </Wrapper>
    );
}