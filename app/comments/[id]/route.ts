import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const comment = comments.find((cmt) => cmt.id === parseInt(id));
  if (!comment) return Response.json({ message: "Not Found" });
  return Response.json(comment);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const commentId = Number(id);
  const index = comments.findIndex((cmt) => cmt.id === commentId);

  if (index === -1) {
    return Response.json({ message: "Not Found" }, { status: 404 });
  }

  const [deletedComment] = comments.splice(index, 1);

  return Response.json({
    message: "Comment deleted",
    deletedComment,
  });
}

export async function PATCH(request: Request,
    { params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;
  const body = await request.json();
  const commentId = Number(id);
  const comment = comments.find((cmt) => cmt.id === commentId);

  if (!comment) {
    return Response.json({ message: "Not Found" }, { status: 404 });
  }
  comment.text = body.text;
  return Response.json(comment);
}
