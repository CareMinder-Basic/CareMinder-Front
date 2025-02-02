type Props = {
  title: string;
  onPress: () => void;
};

export const Button = ({ title, onPress }: Props) => {
  return (
    <button
      onClick={onPress}
      style={{ padding: 10, backgroundColor: "#007AFF" }}
    >
      <p style={{ color: "white", fontSize: 16 }}>{title}</p>
    </button>
  );
};
