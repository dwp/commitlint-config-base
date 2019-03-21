const commitlintConfig = require('../../src/index');

describe('@dwp/commitlint-config-base', () => {
  it('the entrypoint should export an object', () => {
    expect(commitlintConfig).toEqual(jasmine.any(Object));
  });

  describe('the exported object', () => {
    it('should have a rules key', () => {
      expect(Object.keys(commitlintConfig)).toContain('rules');
    });

    describe('the rules key', () => {
      it('should be an object', () => {
        expect(commitlintConfig).toEqual(jasmine.any(Object));
      });

      it('should have a body-leading-blank key', () => {
        expect(Object.keys(commitlintConfig.rules)).toContain('body-leading-blank');
      });

      it('should have a header-max-length key', () => {
        expect(Object.keys(commitlintConfig.rules)).toContain('header-max-length');
      });

      it('should have a footer-leading-blank key', () => {
        expect(Object.keys(commitlintConfig.rules)).toContain('footer-leading-blank');
      });

      it('should have a type-case key', () => {
        expect(Object.keys(commitlintConfig.rules)).toContain('type-case');
      });

      it('should have a type-empty key', () => {
        expect(Object.keys(commitlintConfig.rules)).toContain('type-empty');
      });

      it('should have a type-enum key', () => {
        expect(Object.keys(commitlintConfig.rules)).toContain('type-enum');
      });

      it('should not have any other keys', () => {
        expect(Object.keys(commitlintConfig)).toEqual(['rules']);
      });

      describe('body-leading-blank', () => {
        const rule = commitlintConfig.rules['body-leading-blank'];

        it('should be a warning', () => {
          expect(rule[0]).toEqual(1);
        });

        it('should be enabled', () => {
          expect(rule[1]).toEqual('always');
        });
      });

      describe('header-max-length', () => {
        const rule = commitlintConfig.rules['header-max-length'];

                it('should be an warning', () => {
                    expect(rule[0]).toEqual(1);
                });

        it('should be enabled', () => {
          expect(rule[1]).toEqual('always');
        });

        it('should be 72 characters', () => {
          expect(rule[2]).toEqual(72);
        });
      });

      describe('footer-leading-blank', () => {
        const rule = commitlintConfig.rules['footer-leading-blank'];

        it('should be a warning', () => {
          expect(rule[0]).toEqual(1);
        });

        it('should be enabled', () => {
          expect(rule[1]).toEqual('always');
        });
      });

      describe('scope-case', () => {
        const rule = commitlintConfig.rules['scope-case'];

        it('should be an error', () => {
          expect(rule[0]).toEqual(2);
        });

        it('should be enabled', () => {
          expect(rule[1]).toEqual('always');
        });

        it('should be lowercase', () => {
          expect(rule[2]).toEqual('lowerCase');
        });
      });

      describe('subject-empty', () => {
        const rule = commitlintConfig.rules['subject-empty'];

        it('should be an error', () => {
          expect(rule[0]).toEqual(2);
        });

        it('should be enabled', () => {
          expect(rule[1]).toEqual('never');
        });
      });

      describe('subject-full-stop', () => {
        const rule = commitlintConfig.rules['subject-full-stop'];

        it('should be an error', () => {
          expect(rule[0]).toEqual(2);
        });

        it('should be enabled', () => {
          expect(rule[1]).toEqual('never');
        });

        it('should be a period', () => {
          expect(rule[2]).toEqual('.');
        });
      });

      describe('type-case', () => {
        const rule = commitlintConfig.rules['type-case'];

        it('should be an error', () => {
          expect(rule[0]).toEqual(2);
        });

        it('should be enabled', () => {
          expect(rule[1]).toEqual('always');
        });

        it('should be lowercase', () => {
          expect(rule[2]).toEqual('lowerCase');
        });
      });

      describe('type-empty', () => {
        const rule = commitlintConfig.rules['type-empty'];

        it('should be an error', () => {
          expect(rule[0]).toEqual(2);
        });

        it('should be enabled', () => {
          expect(rule[1]).toEqual('never');
        });
      });

      describe('type-enum', () => {
        const rule = commitlintConfig.rules['type-enum'];

        it('should be an error', () => {
          expect(rule[0]).toEqual(2);
        });

        it('should be enabled', () => {
          expect(rule[1]).toEqual('always');
        });

        describe('should allow', () => {
          it('build', () => {
            expect(rule[2]).toContain('build');
          });

          it('chore', () => {
            expect(rule[2]).toContain('chore');
          });

          it('ci', () => {
            expect(rule[2]).toContain('ci');
          });

          it('docs', () => {
            expect(rule[2]).toContain('docs');
          });

          it('feat', () => {
            expect(rule[2]).toContain('feat');
          });

          it('fix', () => {
            expect(rule[2]).toContain('fix');
          });

          it('perf', () => {
            expect(rule[2]).toContain('perf');
          });

          it('refactor', () => {
            expect(rule[2]).toContain('refactor');
          });

          it('revert', () => {
            expect(rule[2]).toContain('revert');
          });

          it('style', () => {
            expect(rule[2]).toContain('style');
          });

          it('test', () => {
            expect(rule[2]).toContain('test');
          });

          it('should not allow any other values', () => {
            expect(rule[2]).toEqual(['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']);
          });
        });
      });
    });
  });
});
