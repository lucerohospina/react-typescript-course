interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return <div>
      Color from Child: { color }
      <button onClick={ onClick }>Click me</button>
    </div>
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      Color from Child: { color }
      { children }
      <button onClick={ onClick }>Click me</button>
    </div>
  );
}
