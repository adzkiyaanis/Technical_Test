type IComment = {
    commentId: number;
    commentContent: string
    replies?: IComment[];
}
const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
    {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
    {
        commentId: 111,
        commentContent: 'Haai juga hai jugaa'
    },
    {
        commentId: 112,
        commentContent: 'Haai juga hai jugaa'
    }
]
},
{
    commentId: 12,
    commentContent: 'Hai juga',
    replies: [
    {
        commentId: 121,
        commentContent: 'Haai juga hai jugaa'
    }
        ]
    }
]
},
    {
    commentId: 2,
    commentContent: 'Halooo'
    }
]
//Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua bbalasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.
function countComments(comments: IComment[]): number {
    let count = comments.length;
  
    for (const comment of comments) {
      if (comment.replies) {
        count += countComments(comment.replies);
      }
    }
  
    return count;
  }
  console.log(countComments(comments)); // Output: 7

  