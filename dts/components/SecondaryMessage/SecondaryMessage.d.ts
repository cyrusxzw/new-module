export function SecondaryMessage({
  className,
  id,
  items,
}: {
  className: any;
  id: any;
  items: any;
}): JSX.Element;
export namespace SecondaryMessage {
  namespace propTypes {
    const className: PropTypes.Requireable<string>;
    const id: PropTypes.Requireable<string>;
    const items: any;
  }
  namespace defaultProps {
    const className_1: any;
    export { className_1 as className };
    const id_1: any;
    export { id_1 as id };
    const items_1: any;
    export { items_1 as items };
  }
}
import PropTypes from 'prop-types';
