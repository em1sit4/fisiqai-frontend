export default function GradientText({ text }: { text: string }) {
  return <span className="gradient-text bg-clip-text bg-gradient-to-r from-primary to-accent">{text}</span>;
}
