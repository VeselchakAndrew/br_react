import PropTypes from 'prop-types';
import ReposItem from './ReposItem';

const Repos = ({ repos }) => {
  const repoItem = repos.map((repo) => <ReposItem key={repo.id} repo={repo} />);
  return <div>{repoItem}</div>;
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
