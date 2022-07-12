import * as React from 'react';
import './style.css';

export default function App() {
  const items = [
    {
      name: 'GAP',
      child: [
        {
          id: 1,
          code: 5,
          coverLevel: 'GAP',
          displayName: 'GAP',
        },
        {
          id: 1,
          code: 5,
          coverLevel: 'GAP',
          displayName: 'GAP',
        },
      ],
    },
    {
      name: 'GAP 1',
      child: [
        {
          id: 1,
          code: 21,
          coverLevel: 'GAP 1',
          displayName: 'GAP 1',
        },
        {
          id: 1,
          code: 21,
          coverLevel: 'GAP 1',
          displayName: 'GAP 1',
        },
        {
          id: 1,
          code: 21,
          coverLevel: 'GAP e',
          displayName: 'GAP d',
        },
      ],
    },
  ];

  const groupBy = (array, key, name) => {
    return array.reduce((result, obj) => {
      result[obj[key]] = result[obj[key]] || {
        name: obj[name],
        child: [],
      };
      // result[obj[key]] ??= {
      //   name: obj[name],
      //   child: []
      // };
      result[obj[key]].child.push(obj);
      return result;
    }, {});
  };

  const items1 = [
    {
      id: 1,
      code: 5,
      coverLevel: 'GAP',
      displayName: 'GAP',
    },
    {
      id: 1,
      code: 6,
      coverLevel: 'GAP',
      displayName: 'GAP',
    },
    {
      id: 1,
      code: 21,
      coverLevel: 'GAP 1',
      displayName: 'GAP 1',
    },
    {
      id: 1,
      code: 21,
      coverLevel: 'GAP 1',
      displayName: 'GAP 1',
    },
    {
      id: 1,
      code: 21,
      coverLevel: 'GAP e',
      displayName: 'GAP d',
    },
  ];

  let obj = groupBy(items1, 'code', 'displayName');
  const result = Object.keys(obj).map((key) => [obj[key]][0]);
  console.log(result);

  return (
    <div>
      {result &&
        result.map((x) => [
          [
            <div>
              <li>{x.name}</li>
            </div>,
          ],
          x.child && x.child.map((o) => <li>{o.code}</li>),
        ])}
    </div>
  );
}
