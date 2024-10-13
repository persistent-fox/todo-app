import { FC } from "react";
import { FlexWrapper } from "../../../components/styled/flex-wrapper";
import { Button } from "../../../components/button/button";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { tasksFilters } from "../../../mock/tasks-filters";
import { setFilter, TFilters } from "../../../store/reducers/tasks-reducer";
import { filterSelect } from "../../../store/selectors/tasks-selectors";

type TFiltersProps = {};

export const Filters: FC<TFiltersProps> = () => {
	const dispatch = useAppDispatch();
	const currentFilter = useAppSelector(filterSelect);

	const onChangeFilter = (filter: TFilters) => {
		dispatch(setFilter(filter));
	};

	return (
		<FlexWrapper gap='12px'>
			{tasksFilters.map(({ id, title, filter }) => (
				<Button key={id} isActive={filter === currentFilter} onClick={() => onChangeFilter(filter)}>
					{title}
				</Button>
			))}
		</FlexWrapper>
	);
};
