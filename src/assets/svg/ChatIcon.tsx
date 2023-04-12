const ChatIcon = ({ color, size }: { color: string; size: string | number }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'inline' }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.3333 5.49999H22V4.16666C22 1.95752 20.2091 0.166656 18 0.166656H4.66667C2.45753 0.166656 0.666672 1.95752 0.666672 4.16666V13.5C0.666672 15.7091 2.45753 17.5 4.66667 17.5V20.1667C4.66819 20.6687 4.95163 21.1274 5.4 21.3533C5.584 21.4532 5.7907 21.5037 6.00001 21.5C6.2885 21.5 6.56921 21.4064 6.8 21.2333C7.55542 22.2405 8.74098 22.8333 10 22.8333H16.2267L21.2 26.5667C21.4308 26.7398 21.7115 26.8333 22 26.8333C22.2093 26.837 22.416 26.7865 22.6 26.6867C23.0484 26.4607 23.3318 26.0021 23.3333 25.5V22.8333C25.5425 22.8333 27.3333 21.0425 27.3333 18.8333V9.49999C27.3333 7.29085 25.5425 5.49999 23.3333 5.49999ZM7.33334 17.5V16.1667C7.33334 15.4303 6.73638 14.8333 6.00001 14.8333H4.66667C3.93029 14.8333 3.33334 14.2364 3.33334 13.5V4.16666C3.33334 3.43028 3.93029 2.83332 4.66667 2.83332H18C18.7364 2.83332 19.3333 3.43028 19.3333 4.16666V13.5C19.3333 14.2364 18.7364 14.8333 18 14.8333H11.3333C11.0448 14.8333 10.7641 14.9269 10.5333 15.1L7.33334 17.5ZM23.3333 20.1667C24.0697 20.1667 24.6667 19.5697 24.6667 18.8333V9.49999C24.6667 8.76361 24.0697 8.16666 23.3333 8.16666H22V13.5C22 15.7091 20.2091 17.5 18 17.5H11.7733L8.96 19.62C9.20337 19.9534 9.58741 20.1552 10 20.1667H16.6667C16.9552 20.1667 17.2359 20.2602 17.4667 20.4333L20.6667 22.8333V21.5C20.6667 20.7636 21.2636 20.1667 22 20.1667H23.3333Z"
          fill={color}
        />
      </svg>
    </>
  )
}

export default ChatIcon