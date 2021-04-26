export function Message({
  className,
  copy,
  heading,
  id,
  link,
}: {
  className: any;
  copy: any;
  heading: any;
  id: any;
  link: any;
}): JSX.Element;
export namespace Message {
  namespace propTypes {
    const className: PropTypes.Requireable<string>;
    const copy: PropTypes.Validator<string>;
    const heading: PropTypes.Validator<string>;
    const id: PropTypes.Requireable<string>;
    const link: PropTypes.Requireable<
      PropTypes.InferProps<{
        title: PropTypes.Validator<string>;
        url: PropTypes.Validator<string>;
      }>
    >;
  }
  namespace defaultProps {
    const className_1: any;
    export { className_1 as className };
    const copy_1: any;
    export { copy_1 as copy };
    const heading_1: any;
    export { heading_1 as heading };
    const id_1: any;
    export { id_1 as id };
    const link_1: any;
    export { link_1 as link };
  }
}
import PropTypes from 'prop-types';
