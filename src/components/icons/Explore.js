import * as React from "react";

function Discovery(props) {
  if (props.active) {
    return (
      <svg fill="#262626" height={22} viewBox="0 0 48 48" width={22} {...props}>
        <path
          clipRule="evenodd"
          d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm12.2 13.8l-7 14.8c-.1.3-.4.6-.7.7l-14.8 7c-.2.1-.4.1-.6.1-.4 0-.8-.2-1.1-.4-.4-.4-.6-1.1-.3-1.7l7-14.8c.1-.3.4-.6.7-.7l14.8-7c.6-.3 1.3-.2 1.7.3.5.4.6 1.1.3 1.7zm-15 7.4l-5 10.5 10.5-5-5.5-5.5z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg
      aria-label="Ki\u015Filer Bul"
      className="prefix___8-yf5"
      fill="#262626"
      height={22}
      viewBox="0 0 48 48"
      width={22}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Discovery;
