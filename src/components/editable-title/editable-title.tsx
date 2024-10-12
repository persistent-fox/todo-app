import { FC, ReactNode, useState } from "react";
import { TextField } from "../text-field/text-field";
import styled from "styled-components";

type TEditableTitleProps = {
	children: ReactNode;
};

export const EditableTitle: FC<TEditableTitleProps> = ({ children }) => {
	const [isEdited, setIsEdited] = useState(false);
	const onHandleEdit = () => {
		setIsEdited(prevState => !prevState);
	};
	return (
		<SEditableTitle>
			<span onDoubleClick={onHandleEdit}>{isEdited ? <TextField onBlur={onHandleEdit} autoFocus /> : children}</span>
		</SEditableTitle>
	);
};

export const SEditableTitle = styled.div`
	cursor: pointer;
`;
