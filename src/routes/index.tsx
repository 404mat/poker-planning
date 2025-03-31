import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return <div className="flex items-center justify-center">Hello</div>;
}
