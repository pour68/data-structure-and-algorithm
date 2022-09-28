const ArrayList = require("./arrayList");

describe("#add", () => {
  test("Add a value to the end of the arrayList", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);

    expect(al.length).toBe(2);
  });
});

describe("#remove", () => {
  test("Remove a value at the end of the arrayList", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);
    al.remove(100);

    expect(al.length).toBe(1);
  });
});

describe("#insertAt", () => {
  test("Insert a value in the middle of the arrayList", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);
    al.add(1000);
    al.insertAt(1, 10000);

    expect(al.indexAt(1)).toBe(10000);
  });
  test("Enter a value at the beginning of the arrayList", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);
    al.add(1000);
    al.insertAt(0, 10000);

    expect(al.indexAt(0)).toBe(10000);
  });
  test("Enter a value at the end of the arrayList", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);
    al.add(1000);
    const lastIndexItem = al.length;
    al.insertAt(lastIndexItem, 10000);

    expect(al.indexAt(lastIndexItem)).toBe(10000);
  });
});

describe("#contains", () => {
  test("Check if there is a value in the arrayList", () => {
    const al = new ArrayList();

    al.add(100);

    expect(al.contains(100)).toBe(true);
  });
});

describe("#removeAt", () => {
  test("Remove a value from arrayList by index", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);
    al.add(1000);
    al.removeAt(0);

    expect(al.indexAt(0)).toBe(100);
  });
});

describe("#indexAt", () => {
  test("Get a value from arrayList by index", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);
    al.add(1000);

    expect(al.indexAt(1)).toBe(100);
  });
});

describe("#indexOf", () => {
  test("Find the index of a value from arrayList", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);
    al.add(1000);

    expect(al.indexOf(100)).toBe(1);
  });
});

describe("#clear", () => {
  test("Clear the arrayList", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);
    al.add(1000);
    al.clear();

    expect(al.length).toBe(0);
  });
});
