import styled from "styled-components";

const Table = styled.table`
    border-collapse: collapse;
    background-color: #FFFFFF;
    border-radius: 20px;
    width: 100%;
`;

const HeaderTitle = styled.th`
    font-family: var(--font-poppins);
    font-weight: 600;
    text-align: start;
    padding: 20px 0 20px 30px;
`;

const Checkbox = styled.div`
    display: block;
    position: relative;

    input,
    label span{
        width: 24px;
        height: 24px;
    }

    input {
        position: absolute;
        opacity: 0;
        z-index: 1;

        &:checked + label span {
            border: 2px solid #135846;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    label span {
        border: 2px solid #707070;
        border-radius: 3px;
        display: inline-block;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 20px;
            height: 20px;
            background-color: #135846;
            border-radius: 3px;
            transition: 0.2s;
        }
    }
`;

const TableTools = styled.div`
    display: flex;
`;

const FilterTable = styled.div`
    display: flex;
    width: 60%;
    margin-bottom: 50px;
`;

const FilterButton = styled.button`
    font-family: var(--font-poppins);
    color: #6E6E6E;
    font-weight: 500;
    padding: 12px 30px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #D4D4D4;

    &:focus{
        color: #135846;
        border-bottom: 2px solid #135846;
        outline: none;
    }
`;

const TableButtons = styled.div`
    display: flex;
    width: 40%;
    margin-left: 50px;
    justify-content: flex-end;
    gap: 20px;
`;

export {
    Table,
    HeaderTitle,
    Checkbox,
    TableTools,
    TableButtons,
    FilterTable,
    FilterButton
};