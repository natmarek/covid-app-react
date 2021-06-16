export const Country = (props) => {
    return (
      <option key={props.slug} value={props.slug}>
        {props.slug.toUpperCase()}
      </option>
    );
  };
