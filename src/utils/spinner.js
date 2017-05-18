import React from 'react';
import { compose, lifecycle, branch, renderComponent, setDisplayName, withProps } from 'recompose';
import { identity } from 'lodash';
import BeatLoading from 'respinner/lib/beat';
import css from 'css-template';

/**
 * High-Order Component to render a spinner when a dialog is in loading state
 * @param fetcher: (props: any) => void
 *   This is called on componentDidMount to start a loading progress.
 *
 * @param isFetching: (props: any) => boolean
 *   This is called when a prop has changed. When it returns true, a spinner is rendered.
 *   Normal component will be rendered otherwise
 *
 * @returns Enhanced Component
 */

const styles = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinnerWhenFetching = (
  fetcher,
  dataNotAvailable,
  extendProps,
) => compose(
  setDisplayName('Spinner'),
  lifecycle({
    componentDidMount() {
      // eslint-disable-next-line immutable/no-this
      fetcher(this.props);
    },
  }),
  withProps(() => ({ ...extendProps })),
  branch(
    dataNotAvailable,
    renderComponent(({ spinnerStyles }) =>
      <div className="text-center" style={spinnerStyles || styles}>
        <BeatLoading size={16} fill="#1dbbee" count={3} />
      </div>
    ),
    identity
  )
);

export default spinnerWhenFetching;
