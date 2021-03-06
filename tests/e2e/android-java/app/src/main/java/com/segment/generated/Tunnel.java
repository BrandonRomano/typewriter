/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */
package com.segment.generated;

import java.util.*;
import com.segment.analytics.Properties;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public final class Tunnel extends SerializableProperties {
    private Properties properties;

    private Tunnel(Properties properties) {
        this.properties = properties;
    }

    protected Properties toProperties() {
        return properties;
    }

    /**
     * Builder for {@link Tunnel}
     */
    public static class Builder {
        private Properties properties;

        /**
         * Builder for {@link Tunnel}
         */
        public Builder() {
            properties = new Properties();
        }

        /**
         * This property is required to generate a valid Tunnel object
         */
        public Builder subterraneanLab(final @NonNull SubterraneanLab subterraneanLab) {
            if (subterraneanLab != null) {
                properties.putValue("subterranean lab", subterraneanLab.toProperties());
            } else {
                properties.putValue("subterranean lab", subterraneanLab);
            }

            return this;
        }

        /**
         * Build an instance of {@link Tunnel}
         */
        public Tunnel build() {
            if(properties.get("subterranean lab") == null){
                throw new IllegalArgumentException("Tunnel missing required property: subterranean lab");
            }
            return new Tunnel(properties);
        }
    }
}
