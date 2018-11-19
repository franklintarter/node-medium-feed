export const basic = {
  "name":"3387",
  "type":1,
  "text":"In a perfect world, we could delay or avoid doing those things in favor of the more meaningful and interesting tasks. Unfortunately, those things can’t be avoided forever, so we should do our best to spend the least amount of time possible on them.",
  "markups":[  
  ]
}

export const paragraphWithMultipleMarkups = {
  "name":"e09c",
  "type":1,
  "text":"If you’re starting a new business, you might consider using something like Stripe Atlas to avoid setting up a bank account or using government websites to do the legal set up. We decided to go with this option and found it saved us a tremendous amount of time allowing us to preserve our creative, mental energy for the things that truly make our business valuable. It was money well spent.",
  "markups":[  
    {  
      "type":3,
      "start":75,
      "end":87,
      "href":"https://stripe.com/atlas",
      "title":"",
      "rel":"noopener",
      "anchorType":0
    },
    {  
      "type":1,
      "start":75,
      "end":87
    },
    {  
      "type":2,
      "start":82,
      "end":87
    },
    {
      "type":2,
      "start":97,
      "end":104
    },
    {
      "type":1,
      "start":97,
      "end":104
    }
  ],
  "expectedResult": "\n\n If you’re starting a new business, you might consider using something like [**Stripe *Atlas***](https://stripe.com/atlas) to avoid ***setting*** up a bank account or using government websites to do the legal set up. We decided to go with this option and found it saved us a tremendous amount of time allowing us to preserve our creative, mental energy for the things that truly make our business valuable. It was money well spent."
}

export const createTestP = (type: number, expectedResult: string, paragraphType: string) =>{
  return {
    name: "3387",
    type,
    expectedResult,
    text: "foo",
    testMessage: paragraphType,
    metadata: { id: "1*bHYpuGdhx1EaRCFRIfXCqQ.png", originalWidth: "200", originalHeight: "258" },
    iframe: { mediaResourceId: "12345", iframeWidth: "200", iframeHeight: "200" }
  }
}

export const markupParagraphs = [
  createTestP(1, "\n\n foo", "Standard Paragraph"),
  createTestP(2, "\n\n# foo", "H1 Paragraph"),
  createTestP(4, "\n\n![foo](https://cdn-images-1.medium.com/fit/200/258/1*bHYpuGdhx1EaRCFRIfXCqQ.png)*foo*", "Image and Caption Paragraph"),
  createTestP(6, "\n\n> foo", "Block Quote Paragraph"),
  createTestP(8, "\n```\n foo```", "Code Paragraph"),
  createTestP(9, "\n\n* foo", "Unordered List Paragraph"),
  createTestP(10, "\n\n1. foo", "Ordered List Paragraph"),
  createTestP(11, "\n<iframe src=\"https://medium.com/media/12345\" frameborder=0></iframe>", "IFrame Paragraph"),
  createTestP(13, "\n\n### foo", "Subtitle Paragraph"),
]
