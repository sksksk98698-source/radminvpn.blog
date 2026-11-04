import { baseUrl, languages } from "../../../src/utils/i18n.ts";

Object.keys(languages).forEach((locale) => {
	describe(`locale ${locale} should work`, () => {
		const defaultLocale = Cypress.env("defaultLocale");
		const basePath = new URL(
			Cypress.config("baseUrl") || "http://localhost:4321",
		).pathname;

		beforeEach(() => {
			cy.visit(`${locale}`);
		});

		it(`SEO attributes should be correct`, () => {
			// <HTML> lang attribute should be current locale
			cy.get("html")
				.invoke("attr", "lang")
				.then((lang) => {
					cy.wrap(lang).as("currentLanguage");
				});
			cy.get("@currentLanguage").then((currentLanguage) => {
				expect(currentLanguage).to.eq(locale);
			});

			// <link rel="alternate" hreflang="x" href="y"> should exist and be correct
			const expectedHref = (locale: string) =>
				new URL(
					`${basePath.replace(/\/$/, "")}/${locale}/`,
					baseUrl,
				).toString();
			cy.get(`link[rel="alternate"][hreflang="x-default"]`).should(
				"have.attr",
				"href",
				expectedHref(defaultLocale),
			);
			cy.get(`link[rel="alternate"][hreflang="${locale}"]`).should(
				"have.attr",
				"href",
				expectedHref(locale),
			);
		});

		it(`Current locale should be able to switch to other language`, () => {
			cy.dataCy("change-language").click({ force: true });
			cy.dataCy("avaliable-language").each(($language) => {
				cy.request("GET", $language.prop("href"))
					.its("status")
					.should("eq", 200);
			});
		});
	});
});
