import styled from 'styled-components';

export const SIconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.space[1]};
`;

export const SIconThumbnail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: white;
    height: 120px;
    width: 120px;
`;

export const SIconItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > svg {
        color: ${({ theme }) => theme.colors.lightGrey};
    }

    & > span {
        display: block;
        font-size: 12px;
        margin-top: ${({ theme }) => theme.space[2.5]};
    }
`;

export const SEntitySection = styled.div`
    margin-bottom: ${({ theme }) => theme.space[4]};
`;
