type TitleProps = {
  title: string;
  subtitle: string;
};

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};
