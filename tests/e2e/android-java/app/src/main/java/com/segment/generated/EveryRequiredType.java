/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */
package com.segment.generated;

import java.util.*;
import com.segment.analytics.Properties;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public final class EveryRequiredType extends SerializableProperties {
    private Properties properties;

    private EveryRequiredType(Properties properties) {
        this.properties = properties;
    }

    protected Properties toProperties() {
        return properties;
    }

    /**
     * Builder for {@link EveryRequiredType}
     */
    public static class Builder {
        private Properties properties;

        /**
         * Builder for {@link EveryRequiredType}
         */
        public Builder() {
            properties = new Properties();
        }

        /**
         * Required any property
         * This property is required to generate a valid EveryRequiredType object
         */
        public Builder requiredAny(final @Nullable Object requiredAny) {
            properties.putValue("required any", requiredAny);
            
            return this;
        }

        /**
         * Required array property
         * This property is required to generate a valid EveryRequiredType object
         */
        public Builder requiredArray(final @NonNull List<Object> requiredArray) {
            List<?> p = TypewriterUtils.serializeList(requiredArray);
            properties.putValue("required array", p);

            return this;
        }

        /**
         * Required array with properties
         * This property is required to generate a valid EveryRequiredType object
         */
        public Builder requiredArrayWithProperties(final @NonNull List<RequiredArrayWithPropertiesItem1> requiredArrayWithProperties) {
            List<?> p = TypewriterUtils.serializeList(requiredArrayWithProperties);
            properties.putValue("required array with properties", p);

            return this;
        }

        /**
         * Required boolean property
         * This property is required to generate a valid EveryRequiredType object
         */
        public Builder requiredBoolean(final @NonNull Boolean requiredBoolean) {
            properties.putValue("required boolean", requiredBoolean);
            
            return this;
        }

        /**
         * Required integer property
         * This property is required to generate a valid EveryRequiredType object
         */
        public Builder requiredInt(final @NonNull Long requiredInt) {
            properties.putValue("required int", requiredInt);
            
            return this;
        }

        /**
         * Required number property
         * This property is required to generate a valid EveryRequiredType object
         */
        public Builder requiredNumber(final @NonNull Double requiredNumber) {
            properties.putValue("required number", requiredNumber);
            
            return this;
        }

        /**
         * Required object property
         * This property is required to generate a valid EveryRequiredType object
         */
        public Builder requiredObject(final @NonNull Object requiredObject) {
            properties.putValue("required object", requiredObject);
            
            return this;
        }

        /**
         * Required object with properties
         * This property is required to generate a valid EveryRequiredType object
         */
        public Builder requiredObjectWithProperties(final @NonNull RequiredObjectWithProperties1 requiredObjectWithProperties) {
            if (requiredObjectWithProperties != null) {
                properties.putValue("required object with properties", requiredObjectWithProperties.toProperties());
            } else {
                properties.putValue("required object with properties", requiredObjectWithProperties);
            }

            return this;
        }

        /**
         * Required string property
         * This property is required to generate a valid EveryRequiredType object
         */
        public Builder requiredString(final @NonNull String requiredString) {
            properties.putValue("required string", requiredString);
            
            return this;
        }

        /**
         * Required string property with a regex conditional
         * This property is required to generate a valid EveryRequiredType object
         */
        public Builder requiredStringWithRegex(final @NonNull String requiredStringWithRegex) {
            properties.putValue("required string with regex", requiredStringWithRegex);
            
            return this;
        }

        /**
         * Build an instance of {@link EveryRequiredType}
         */
        public EveryRequiredType build() {
            if(properties.get("required array") == null){
                throw new IllegalArgumentException("EveryRequiredType missing required property: required array");
            }
            if(properties.get("required array with properties") == null){
                throw new IllegalArgumentException("EveryRequiredType missing required property: required array with properties");
            }
            if(properties.get("required boolean") == null){
                throw new IllegalArgumentException("EveryRequiredType missing required property: required boolean");
            }
            if(properties.get("required int") == null){
                throw new IllegalArgumentException("EveryRequiredType missing required property: required int");
            }
            if(properties.get("required number") == null){
                throw new IllegalArgumentException("EveryRequiredType missing required property: required number");
            }
            if(properties.get("required object") == null){
                throw new IllegalArgumentException("EveryRequiredType missing required property: required object");
            }
            if(properties.get("required object with properties") == null){
                throw new IllegalArgumentException("EveryRequiredType missing required property: required object with properties");
            }
            if(properties.get("required string") == null){
                throw new IllegalArgumentException("EveryRequiredType missing required property: required string");
            }
            if(properties.get("required string with regex") == null){
                throw new IllegalArgumentException("EveryRequiredType missing required property: required string with regex");
            }
            return new EveryRequiredType(properties);
        }
    }
}
