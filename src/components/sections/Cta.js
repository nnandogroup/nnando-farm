import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
// import Button from "../elements/Button";
// import Input from "../elements/Input";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section {...props} className={outerClasses} id="quote">
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">Get Quote</h3>
          </div>
          <form className="cta-action" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                style={{
                  padding: "8px",
                  border: errors.name ? "1px solid red" : "1px solid #D0D5DD",
                  outline: "none",
                  fontSize: "16px",
                }}
                id="name"
                type="text"
                label="text"
                placeholder="Your name"
                {...register("name", {
                  required: "Name cannot be empty",
                  pattern: {
                    // value: /^[^\s@]+@[^\s@]+$/,
                    message: "Please enter your name",
                  },
                })}
              />
              {errors.name && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                    marginBottom: "4px",
                  }}
                >
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div style={{ marginTop: "8px" }}>
              <input
                style={{
                  border: errors.email ? "1px solid red" : "1px solid #D0D5DD",
                  padding: "8px",
                  outline: "none",
                  fontSize: "16px",
                }}
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email cannot be empty",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />

              {errors.email && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                    marginBottom: "4px",
                  }}
                >
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div style={{ marginTop: "8px" }}>
              <input
                style={{
                  padding: "8px",
                  border: errors.number ? "1px solid red" : "1px solid #D0D5DD",
                  outline: "none",
                  fontSize: "16px",
                }}
                id="phone-number"
                type="text"
                label="Phone number"
                placeholder="Your phone number"
                {...register("number", {
                  required: "Phone number cannot be empty",
                  pattern: {
                    value: /\d{10}/,
                    message: "Please enter a valid phone number",
                  },
                  minLength: {
                    value: 11,
                    message: "Password must be at least 11 characters",
                  },
                  maxLength: {
                    value: 14,
                    message: "Number cannot exceed more than 14 characters",
                  },
                })}
              />

              {errors.number && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                    marginBottom: "4px",
                  }}
                >
                  {errors.number?.message}
                </p>
              )}
            </div>
            <div style={{ marginTop: "8px" }}>
              <input
                style={{
                  padding: "8px",
                  border: errors.subject
                    ? "1px solid red"
                    : "1px solid #D0D5DD",
                  outline: "none",
                  fontSize: "16px",
                }}
                id="subject"
                type="text"
                label="Subject"
                placeholder="Subject"
                {...register("subject", {
                  required: "Subject cannot be empty",
                  pattern: {
                    // value: /^[^\s@]+@[^\s@]+$/,
                    message: "Please enter a subject",
                  },
                })}
              />
              {errors.subject && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                    marginBottom: "4px",
                  }}
                >
                  {errors.subject?.message}
                </p>
              )}
            </div>
            <div style={{ marginTop: "8px" }}>
              <textarea
                style={{
                  padding: "8px",
                  border: errors.subject
                    ? "1px solid red"
                    : "1px solid #D0D5DD",
                  outline: "none",
                  fontSize: "16px",
                }}
                id="message"
                type="text"
                label="Message"
                placeholder="Message"
                {...register("body", {
                  required: "Message cannot be empty",
                  pattern: {
                    // value: /^[^\s@]+@[^\s@]+$/,
                    message: "Please enter your message",
                  },
                })}
              />
              {errors.body && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                    marginBottom: "4px",
                  }}
                >
                  {errors.body?.message}
                </p>
              )}
            </div>
            {/* <Button
              type="submit"
              tag="a"
              color="primary"
              // wideMobile
              className="mt-12"
              // onClick={scrollToQuote}
            >
              Submit
            </Button> */}
            <button
              style={{
                backgroundColor: "#1cb68b",
                color: "#eceded",
                fontWeight: "600",
                padding: "11px 31px",
                borderRadius: "2px",
                marginTop: "12px",
                height: "48px",
                lineHeight: "24px",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
