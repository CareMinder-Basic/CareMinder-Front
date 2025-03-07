describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/sign-in');
  });

  it('로그인 폼 확인', () => {
    cy.wait(1000);
    cy.get('[data-cy=login-id]').should('exist');
    cy.get('[data-cy=password]').should('be.visible');
    cy.get('[data-cy=submit-button]').should('be.visible');
  });

  it('로그인 실패(계정 상태 비활성화)', () => {
    cy.get('[data-cy=login-id]').type('successLoginId');
    cy.get('[data-cy=password]').type('successLoginPassword');
    cy.get('[data-cy=submit-button]').click();
    //에러 처리 들어갈 곳
  });

  it('로그인 실패(계정 정보 불일치)', () => {
    cy.get('[data-cy=login-id]').type('successLoginId');
    cy.get('[data-cy=password]').type('wrongPassword');
    cy.get('[data-cy=submit-button]').click();
    //에러 처리 들어갈 곳
  });

  it('로그인 실패(계정 정보 없음)', () => {
    cy.get('[data-cy=login-id]').type('wrongLoginId');
    cy.get('[data-cy=password]').type('wrongPassword');
    cy.get('[data-cy=submit-button]').click();
    //에러 처리 들어갈 곳
  });

  it('로그인 실패(서버 오류)', () => {
    cy.get('[data-cy=login-id]').type('successLoginId');
    cy.get('[data-cy=password]').type('successLoginPassword');
    cy.get('[data-cy=submit-button]').click();
    //에러 처리 들어갈 곳
  });

  const serverUrl = Cypress.env('serverUrl');

  it('로그인 성공', () => {
    cy.get('[data-cy=login-id]').type('ward');
    cy.get('[data-cy=password]').type('1234');
    cy.get('[data-cy=submit-button]').click();
    cy.intercept('POST', `${serverUrl}/users/login`, {
      statusCode: 200,
      body: {
        jwtResponse: {
          accessToken: 'success-ward-token',
          refreshToken: 'success-ward-refresh-token',
        },
        currentUser: {
          name: 'success-ward-user',
          accountId: 0,
          role: 'WARD',
          passwordChangeRequested: true,
          firstLogin: true,
          requestStatus: 'PENDING',
          accountStatus: 'ACTIVE',
        },
      },
    }).as('loginRequest');
    //기대하는 경로와 현재 경로가 일치하는지
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
