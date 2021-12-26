import mock from '../mock';
const content1 = {
    "page": {
      "title": "Romantic Comedy",
      "total-content-items" : "54",
      "page-num-requested" : "1",
      "page-size-requested" : "20",
      "page-size-returned" : "20",
      "content-items": {
        "content": [
          {
            "name": "The Birds",
            "posterImage": "poster1.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster2.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster3.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster2.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster1.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster3.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster3.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster2.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster1.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster1.jpg"
          },
                  {
            "name": "The Birds",
            "posterImage": "poster1.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster2.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster3.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster2.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster1.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster3.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster3.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster2.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster1.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster1.jpg"
          }
        ]
      }
    }
  }

  const content2 = {
    "page": {
      "title": "Romantic Comedy",
      "total-content-items" : "54",
      "page-num-requested" : "2",
      "page-size-requested" : "20",
      "page-size-returned" : "20",
      "content-items": {
        "content": [
          {
            "name": "Rear Window",
            "posterImage": "poster5.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster6.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster5.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster4.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster6.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster6.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster5.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster4.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster4.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster5.jpg"
          },
                  {
            "name": "Rear Window",
            "posterImage": "poster5.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster6.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster5.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster4.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster6.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster6.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster5.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster4.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster4.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster5.jpg"
          }
        ]
      }
    }
  }
  const content3 = {
    "page": {
      "title": "Romantic Comedy",
      "total-content-items" : "54",
      "page-num-requested" : "3",
      "page-size-requested" : "20",
      "page-size-returned" : "14",
      "content-items": {
        "content": [
          {
            "name": "Family Pot",
            "posterImage": "poster9.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster8.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster7.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster9.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster9.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster8.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster7.jpg"
          },
                 {
            "name": "Family Pot",
            "posterImage": "poster9.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "poster8.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster7.jpg"
          },
          {
            "name": "The Birds with an Extra Long Title",
            "posterImage": "poster9.jpg"
          },
          {
            "name": "Rear Window",
            "posterImage": "poster9.jpg"
          },
          {
            "name": "The Birds",
            "posterImage": "poster8.jpg"
          },
          {
            "name": "Family Pot",
            "posterImage": "posterthatismissing.jpg"
          }
        ]
      }
    }
  }

  interface ContentRequest {
    params: {
      pageNo: number
    }
  }

  mock.onGet('/api/v1/content').reply((request: ContentRequest) => {
    const {pageNo} = request.params;
    if(pageNo === 1) {
      return [200, content1.page];
    } else if (pageNo === 2) {
      return [200, content2.page];
    } else if (pageNo === 3) {
      return [200, content3.page]
    } else {
      return [400, {status: 'error', reason: 'Content not available'}]
    }
  });