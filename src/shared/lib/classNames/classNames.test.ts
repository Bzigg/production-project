import { classNames } from "./classNames"

describe("classNames", () => {
    test("только с первым параметром", () => {
        expect(classNames("someClass")).toBe("someClass")
    })

    test("с дополнительными параметрами", () => {
        const expected = "someClass additional1 additional2"
        expect(classNames("someClass", {}, ["additional1 additional2"])).toBe(
            expected
        )
    })

    test("с модами", () => {
        const expected = "someClass mod1 mod2"
        expect(classNames("someClass", { mod1: true, mod2: true })).toBe(
            expected
        )
    })

    test("с модами (false)", () => {
        const expected = "someClass mod1"
        expect(classNames("someClass", { mod1: true, mod2: false })).toBe(
            expected
        )
    })

    test("с модами (undefined)", () => {
        const expected = "someClass mod1"
        expect(classNames("someClass", { mod1: true, mod2: undefined })).toBe(
            expected
        )
    })
})
