import { connect } from 'react-redux';
import { SetSort } from '../../utils/utils';
import { MainPage } from './MainPage';
import { setSortBy } from '../../redux/mainReducer';

const mapStateToProps = (state) => {
  return {
    items: SetSort(state.main.selectedSort, state.main.items),
    active: state.main.selectedSort,
  };
};

export const MainPageContainer = connect(mapStateToProps, { setSortBy })(
  MainPage
);
