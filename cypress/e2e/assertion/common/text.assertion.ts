import { TextQuestion } from "@questions/common/text.question";

export class TextAssertion {
  static haveText(element: string, textExpected: string) {
    cy.get(element).should(($el) => {
      const text = TextQuestion.takeText($el);
      expect(text).to.contain(textExpected);
    });
  }

  static notHaveText(element: string, textExpected: string) {
    cy.get(element).should(($el) => {
      const text = TextQuestion.takeText($el);
      expect(text).to.not.contain(textExpected);
    });
  }

  static haveValue(element: string, valueExpected: string) {
    TextQuestion.takeValueInput(element).then((value) => {
      expect(value).to.contains(valueExpected);
    });
  }
}
