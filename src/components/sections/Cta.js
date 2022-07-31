import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";
import Input from "../elements/Input";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section {...props} className={outerClasses} id="quote">
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">For previewing layouts and visual?</h3>
          </div>
          <form className="cta-action">
            <div>
              <Input
                id="newsletter"
                type="email"
                label="email"
                labelHidden
                hasIcon="right"
                placeholder="Your email"
              />
            </div>
            <div className="mt-12">
              <Input
                id="phone number"
                type="text"
                label="Phone number"
                labelHidden
                hasIcon="right"
                placeholder="Your phone number"
              />
            </div>
            <Button
              tag="a"
              color="primary"
              // wideMobile
              className="mt-12"
              // onClick={scrollToQuote}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
