import { connect } from 'react-redux';
import { setCurrentUser, setHasToken, initializeStore, setIsPrivateMode, setBranchList, setCurrentNoteAndBranch, updateBranchList } from '../actions';

import App from '../components/App';

function mapDispatchToProps(dispatch) {
  return {
    onLogin(user) {
      dispatch(setHasToken());
      dispatch(setCurrentUser(user));
    },
    onLogout() {
      dispatch(initializeStore());
    },
    onCreateBranch(user) {
      dispatch(setCurrentUser(user));
    },
    togglePrivateMode() {
      dispatch(setIsPrivateMode());
    },
    onSetBranchList(branchList) {
      dispatch(setBranchList(branchList));
    },
    onUpdateBranchList(branchList) {
      dispatch(updateBranchList(branchList));
    },
    onNoteListEntryClick(note, branch) {
      dispatch(setCurrentNoteAndBranch(note, branch));
    }
  };
}

function mapStateToProps(state) {
  return {
    hasToken: state.hasToken,
    currentUser: state.currentUser,
    isPrivateMode: state.isPrivateMode,
    branchList: state.branchList,
    currentNote: state.currentNote,
    isModified: state.isModified,
    sharedUsers: state.sharedUsers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
